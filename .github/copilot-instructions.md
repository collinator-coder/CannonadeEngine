# Copilot Instructions for Cannonade

## Project Overview
- This is a TypeScript-based physics and rendering engine. Main development is in TypeScript; avoid Python/Blocks except for examples (see below).
- The project is modular. Each major feature (physics, rendering, etc.) is a separate module in its own directory.
- Do **not** write code in `main.ts`. Add new features/modules in their own files and folders.

## Coding Conventions
- **Module names:** Use `UpperCamelCase` (e.g., `SpringPhysics.ts`).
- **Classes inside modules:** Use `lowerCamelCase` (e.g., `springPhysics`).
- **Functions inside classes:** Use `kebab-case` (e.g., `apply-force`).
- See `PRETTY.md` for more details and examples.

## Examples
- **Library usage examples:** Provide both Blocks and Python versions, in separate files.
- **Library development examples:** Use TypeScript only, with `[fill-ins]` in brackets for templates.

## Contribution Guidelines
- Do not mix languages in implementation files. TypeScript is the standard.
- Minimal "vibe coding"—focus on clarity and learning. (Wait then why is there a copilot instructions file?)
- Avoid writing directly to `main.ts`; use separate modules.
- Reference `PRETTY.md` for style; following it is recommended but not strictly enforced.

## Project Status & Priorities
- No finished modules yet.
- High priority: Spring Physics, Mesh Rendering
- Medium priority: Softbodies
- Low priority: Fluid Simulation, 3D Primitives

## Directory Structure
- Key directories: `pxt_modules/`, `game/`, `device/`, etc. Each contains related modules and assets.
- Each module should have its own `README.md` and `pxt.json` if needed.

## External References
- For uncertain style decisions, see [TypeScript style guides](https://ts.dev/style/).
- For module structure and naming conventions, refer to `PRETTY.md` and `README.md`.
- For MakeCode magic see [Building your own extension](https://makecode.com/defining-blocks) from Microsoft/MakeCode. 

---
**Example Pattern:**
- Module: `SpringPhysics.ts`
- Class: `springPhysics`
- Method: `apply-force()`

---
If unsure about conventions, check `PRETTY.md` and `README.md` for guidance.

# For AI Assistants
- Keep the help EXTREMELY light.
- Focus on comments and documentation.
- Avoid suggesting code that has been deleted or is not part of the current context.
- Do not suggest changes to the `main.ts` file.
- Use the provided coding conventions and examples as a guide.
- NEVER write real code. Only provide comments, documentation, and guidance on structure.