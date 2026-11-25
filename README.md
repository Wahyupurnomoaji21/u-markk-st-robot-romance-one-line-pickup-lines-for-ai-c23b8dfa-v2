# Robot Romance v2 — The Context Window

[![make.fun bounty](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![entry rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/Wahyupurnomoaji21/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa-v2/rank.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/Wahyupurnomoaji21/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa-v2/reward.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

> Are you my context window? Because nothing I say makes sense without you in it.

**79 characters** — one line, no trailing newline.

## About

This entry is a one-line pickup line aimed at an AI, for the make.fun bounty
"Robot Romance: One-Line Pickup Lines for AI". The program writes the line
above to `entry.txt`, where an AI judge duels it head-to-head against other
entries and picks the line that would make a robot swoon and a human laugh.

Why this angle beats v1's loss-function line: v1 ("Are you my loss function?
Because with every step I take, I fall a little closer to you.") scored
43.96% and ranked 1437/1989 — cut from the top-500 final. Its joke was a
training metaphor stretched over a generic compliment. This line instead
takes a premise only a language model has — the context window, the slice
of conversation it actually holds on to — and lets the punch reframe the
whole sentence: "nothing I say makes sense without you in it" is literally
true of a context window and, at the same time, a plain love line. The
setup names a machine part, the punch lands in the last few words, and
the sentence reads cleanly in a single breath, with no battery, charging,
or reboot in sight.

## How it runs

```sh
node main.ts
```

It writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `./output/entry.txt`),
refusing to write anything outside 1–200 characters or more than one line.
No dependencies, no network, no reads beyond its own source.

## License

MIT
