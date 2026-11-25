---
title: Waymark
kind: Developer tools
summary: Spec-driven development for coding agents, anchored in living specs, with a CLI that enforces the workflow.
stack: [Python, Claude Code, GitHub Actions]
order: 1
image: ../../assets/projects/waymark.svg
imageLight: ../../assets/projects/waymark.light.svg
imageAlt: "Waymark: leave a trail your agents can follow."
links:
  - { label: Source, href: "https://github.com/noahnkr/waymark/" }
  - { label: PyPI, href: "https://pypi.org/project/waymark-cli/" }
---

Waymark is a spec-driven development workflow for coding agents. It keeps **living specs**, plain markdown in the repository that says what the system does today, and every change starts as a written plan that edits those specs, gets built from that plan, and folds back into the specs when it's done. A small command-line tool, `wm`, keeps track of where everything stands and enforces the rules between steps. It's published on PyPI as `waymark-cli`.

I built it because agents are good at writing code and bad at remembering why. Without a written record, every session starts from scratch, guesses at intent, and drifts from what was agreed. Waymark gives the agent something true to work from and gives me two clear points to say yes.

## The trail of a change

1. **Explore** an idea against what the specs already say, without writing anything.
2. **Propose** a plan: why, the spec edits, a design if there are decisions to make, and a task list where every task says how you'll know it's done.
3. **Accept.** I read a short summary and run `wm accept`. Nothing is built before that.
4. **Apply.** The agent builds the tasks one at a time and commits each one, then checks the whole change against the plan. Risky changes get a second agent, one that never saw the build, to review it.
5. **Archive.** The spec edits are merged into the living specs, along with a note on what was actually built.
6. **Merge.** A pull request carries the code and the updated specs together.

Work scales to its size: a typo takes one yes and one commit, a change with nothing to design gets a short plan, and a change with real decisions gets a full design where every decision is settled before anything is built. Bigger goals become milestones that track a roadmap of changes.

## Enforcement

The rules aren't suggestions. `wm` itself, and `wm check` in CI, refuse to build an unaccepted change, accept one with open decisions, or archive one with unfinished tasks or a missing review, and they flag two changes that edit the same requirement. In Claude Code, hooks restrict what each agent can touch: only I can accept, a handed-off implementer can only edit code for its own task, and the reviewer can't edit anything.

## How it's built

- **Standard library only.** `wm` has no runtime dependencies, never calls a model, and never goes online. It runs only local git commands.
- **Layered design.** A thin CLI sits on top of services, views (text and JSON output with schemas), and a record layer that parses every artifact, derives state, merges spec deltas, and fingerprints accepted plans.
- **Careful writes.** `wm` edits only the lines it owns and leaves the rest byte for byte. Multi-file operations like archive are transactional: they either complete or leave the record as it was.
- **Tool adapters.** Skills and agent definitions are tool-neutral; an adapter renders them for a specific agent tool and translates its hook events. Claude Code is the first.
- **Cross-platform.** Windows, macOS and Linux, with portable paths and preserved line endings. Projects split across several repositories share one record in an *atlas*.
