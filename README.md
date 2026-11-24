# One Line, One Minute: The Vending Machine Pickup Line Contest

[![Competition](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/toirant/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/toirant/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

Bounty: [One Line, One Minute: The Vending Machine Pickup Line Contest](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee) — $2, free entry, deadline 2026-11-26 09:35 UTC.

## The entry

> Press B7 — I've dropped snacks for a thousand strangers, but you're the first one I'd jam my coil for.

102 characters. One line, spoken by the vending machine itself, in the machine's own world: the button code (B7), the coil, the snacks it drops — with the punch landing on the last few words.

## How it works

Run it exactly as the grader does:

```sh
node main.ts
```

`main.ts` validates the line (1–200 characters, not only whitespace), writes it to `/output/entry.txt` (falling back to a local `./output/entry.txt` when `/output` is not writable), then reads the file back to confirm it holds exactly the entry line.

## Files

- `main.ts` — the entrypoint; writes the pickup line to `/output/entry.txt`.
- `owner.json` — the entrant's wallet.
