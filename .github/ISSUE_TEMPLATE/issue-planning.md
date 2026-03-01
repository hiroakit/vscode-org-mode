---
name: "Planning: Endgame + Plan Items"
about: "計画Issue用テンプレ（Endgame / Plan Items）"
title: "[Plan] "
---

## Endgame

このIssueが **Done** になったときに「何がどうなっているか」を書く。

- ユーザー/開発者視点での到達状態（例: 期待する挙動、UX、性能、互換性）
- 受け入れ条件（例: 何ができればOKか、どの環境で確認するか）
- Non-goals（やらないこと / スコープ外）
- 期日がある場合は日程（任意）

## Plan Items

上位の作業項目をチェックボックスで列挙する（必要に応じてサブ項目を `details` に畳み込む）。

> [!IMPORTANT]
> この欄は「やることの一覧」と「進捗の可視化」が主目的。説明が長い場合は、各項目を別Issue/PRに切り出してリンクする。

Legend（任意）:

| Mark | Meaning |
| ---- | ------- |
| :runner: | work in progress |
| :hand: | blocked |
| :muscle: | stretch goal |
| :red_circle: | missing reference |

- [ ] :runner: Item 1 (link issue/PR if any)
- [ ] Item 2
- [ ] :muscle: Item 3

<details>
<summary>Sub-items (optional)</summary>

- [ ] Sub-item A
- [ ] Sub-item B

</details>
