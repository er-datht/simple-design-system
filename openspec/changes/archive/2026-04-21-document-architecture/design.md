## Context

The Simple Design System is a Yarn workspaces monorepo with two apps (`srcs/web/` and `srcs/admin/`). The web app contains a mature component library with 16+ primitive families, 18 typography components, 14+ composed sections, a two-layer form system, 287 auto-generated icons, a CSS custom property design token system with light/dark theming, and Figma Code Connect integration. None of this is formally specified.

This change creates OpenSpec specifications that capture the existing architecture as-is — no code modifications are involved.

## Goals / Non-Goals

**Goals:**
- Capture every major capability as a testable spec with scenarios
- Organize specs by capability (design-tokens, primitives, typography, sections, forms, routing, icons, theming, figma-integration, build-tooling)
- Use ADDED Requirements throughout since no prior specs exist
- Write specs that describe current behavior, enabling future changes to use delta specs

**Non-Goals:**
- Prescribing future architecture or improvements
- Documenting internal implementation details (e.g., exact CSS class names, line-by-line logic)
- Covering the admin app beyond its scaffold state — it has no meaningful architecture yet
- Specifying individual icon components (287 generated files)

## Decisions

**One spec per capability (10 specs):** Each major subsystem gets its own spec file under `specs/<name>/spec.md`. This maps 1:1 to the proposal's capability list and allows future changes to target specific capabilities with delta specs.
- *Alternative: fewer, larger spec files* — rejected because large specs become hard to maintain and make delta tracking coarse-grained.

**Describe behavior, not implementation:** Specs use SHALL/MUST language to describe observable contracts (props, variants, validation rules, token naming) rather than internal implementation choices. This makes specs resilient to refactoring.
- *Alternative: implementation-level specs* — rejected because they'd become stale with any refactor and duplicate what the code already communicates.

**Spec the web app only:** The admin app is a minimal scaffold with a single "Welcome" heading. Specifying it would create noise. It can get its own specs when it has real functionality.

## Risks / Trade-offs

**[Specs drift from code]** → Specs are a snapshot of current architecture. As the codebase evolves, specs may become outdated if not maintained via delta specs in future changes. Mitigation: use OpenSpec change workflow for all future modifications.

**[Spec granularity]** → Some primitives (e.g., 9 input types) have many variants. Specs capture component families rather than exhaustive variant matrices to keep specs maintainable. Mitigation: scenarios cover representative behavior, not every permutation.
