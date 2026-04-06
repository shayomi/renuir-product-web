#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const [, , slug, rawTitle, rawSummary] = process.argv;

if (!slug) {
  console.error('Usage: pnpm spec:new <slug> "Readable Title" "Optional summary"');
  process.exit(1);
}

const defaultTitle = slug
  .split('-')
  .filter(Boolean)
  .map(part => part.charAt(0).toUpperCase() + part.slice(1))
  .join(' ');

const title = rawTitle && rawTitle.trim().length ? rawTitle.trim() : defaultTitle;
const summary = rawSummary && rawSummary.trim().length ? rawSummary.trim() : '';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const specsRoot = path.join(projectRoot, '.legion', 'context', 'specs');

async function ensureSpecsRoot() {
  try {
    const stats = await fs.stat(specsRoot);
    if (!stats.isDirectory()) {
      throw new Error('Specs root exists but is not a directory');
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Specs root not found. Expected .legion/context/specs to exist.');
    }
    throw error;
  }
}

async function getNextSpecDirName() {
  const entries = await fs.readdir(specsRoot, { withFileTypes: true });
  const folders = entries.filter(entry => entry.isDirectory() && entry.name !== 'templates');
  const existingSlug = folders.find(entry => entry.name.endsWith(`-${slug}`));

  if (existingSlug) {
    throw new Error(`A spec folder for slug "${slug}" already exists: ${existingSlug.name}`);
  }

  const numbers = folders
    .map(entry => parseInt(entry.name.split('-')[0], 10))
    .filter(Number.isFinite);

  const nextNumber = (numbers.length ? Math.max(...numbers) + 1 : 1).toString().padStart(3, '0');
  return `${nextNumber}-${slug}`;
}

function buildFileContent(filename) {
  switch (filename) {
    case 'brainstorm.md':
      return `# Brainstorm: ${title}\n\n` +
        `${summary ? `${summary}\n\n` : ''}` +
        '## Problem Space\n' +
        '- What pain are we solving?\n' +
        '- Who feels this first?\n\n' +
        '## Signals & Insights\n' +
        '- Existing customer quotes\n' +
        '- Traffic/search signals\n\n' +
        '## Idea Seeds\n' +
        '- Idea 1\n' +
        '- Idea 2\n\n' +
        '## Risks & Unknowns\n' +
        '- Dependency / confidence notes\n';
    case 'mvp_spec.md':
      return `# MVP Spec: ${title}\n\n` +
        '## One-liner\n' +
        `${summary || 'Describe the MVP outcome in one sentence.'}\n\n` +
        '## Must-Haves\n' +
        '- Item 1\n' +
        '- Item 2\n\n' +
        '## Nice-to-Haves\n' +
        '- Stretch goal\n\n' +
        '## Success Metrics\n' +
        '- Metric or qualitative signal\n';
    case 'product_spec.md':
      return `# Product Spec: ${title}\n\n` +
        '## Problem\n' +
        '- Why we are building this.\n\n' +
        '## Audiences\n' +
        '- Individuals\n- Businesses\n- Developers\n\n' +
        '## User Stories\n' +
        '- As a <user>, I want <action> so that <outcome>.\n\n' +
        '## Acceptance Criteria\n' +
        '- [ ] Requirement 1\n- [ ] Requirement 2\n\n' +
        '## Open Questions\n' +
        '- Question 1\n';
    case 'technical_spec.md':
      return `# Technical Spec: ${title}\n\n` +
        '## Architecture Overview\n' +
        '- Entry points, routes, APIs.\n\n' +
        '## Components & Files\n' +
        '- File or component plan.\n\n' +
        '## Data & State\n' +
        '- Source of data, caching.\n\n' +
        '## Risks\n' +
        '- Technical or delivery risks.\n';
    case 'build-e2e.md':
      return `# Build & E2E Plan: ${title}\n\n` +
        '## Scope\n' +
        'Describe the behaviors that must be covered.\n\n' +
        '## Scenarios\n' +
        '| Scenario | Flow Type | Steps | Expected Result |\n' +
        '| --- | --- | --- | --- |\n' +
        '| Happy Path | Primary | 1. Step one <br> 2. Step two | Success criteria |\n' +
        '| Edge Case | Negative | 1. Step one | Error surfaces clearly |\n\n' +
        '## Edge Cases\n' +
        '- Case 1\n- Case 2\n\n' +
        '## Verification Checklist\n' +
        '- [ ] pnpm lint\n- [ ] pnpm build\n';
    default:
      return '';
  }
}

async function writeSpecFiles(targetDir) {
  const files = ['brainstorm.md', 'mvp_spec.md', 'product_spec.md', 'technical_spec.md', 'build-e2e.md'];

  await Promise.all(
    files.map(async file => {
      const content = buildFileContent(file);
      await fs.writeFile(path.join(targetDir, file), content, 'utf8');
    })
  );
}

async function main() {
  await ensureSpecsRoot();
  const dirName = await getNextSpecDirName();
  const targetDir = path.join(specsRoot, dirName);
  await fs.mkdir(targetDir);
  await writeSpecFiles(targetDir);
  console.log(`Created spec folder: ${path.relative(projectRoot, targetDir)}`);
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
