<!--
Why headers start at H2:
- The PR title is treated as the H1 for the page, so template sections begin at H2.
- GitHub style guide (Headers) states:
  "Headers must adequately describe the content under them. Headers can either follow the guidelines for writing titles or can be written as questions. Use sentence casing for headers.
  If an article has headers, the headers must start with an H2 level header. You can use H3 and H4 level headers to further organize content into related groups, but you cannot skip header levels. There must be text content between a header and subheader, such as an introduction."
  Source: https://docs.github.com/en/enterprise-server@3.15/contributing/style-guide-and-content-model/style-guide?utm_source=chatgpt.com#headers
-->

## Bugfix Overview
<!--
Required. PRs without a meaningful overview may be sent back for clarification.

In 1-3 short sentences, describe the bug context and impact.
Do NOT restate the PR title.

Good example:
Recurring tasks created near midnight were parsed using local time,
causing them to shift by one day when evaluated in UTC.
Tasks should always execute on the originally selected date regardless of timezone.
Affects tasks scheduled between 23:00-00:00 local time.

Why this is a good example:
- It explains why the behavior is considered a bug (not just what was changed)
- It clearly describes observed vs expected behavior
- It narrows down affected conditions, making the issue reproducible and reviewable
- It provides enough context for reviewers without requiring them to infer intent from the diff
-->

## Problem
<!--
Describe the problem in more detail from a user or system perspective.
This section expands on the Overview.

Include:
- What was broken in practice
- What the user or system actually experienced
-->
- Observed behavior:
- Expected behavior:

## Reproduction Steps
<!--
Minimum steps for reviewers to reproduce the issue.
If reproduction is difficult, explain why.
-->
1.
2.
3.

## Root Cause
<!--
- The underlying cause of the bug
- Why it was not detected earlier
-->
- Cause:
- Why it was missed:

## Fix
<!--
- How the issue was fixed
- Why this fix is sufficient
-->
- Fix approach:
- Alternatives considered (if any):

## Verification
<!--
How you confirmed the fix is correct
-->
- [ ] Manual verification
- [ ] Automated test added or updated
- [ ] Existing tests pass
- Test notes (commands, environment, datasets):

## Impact / Risk
<!--
Scope and risk assessment
-->
- Affected users:
- Backward compatibility:
- Potential side effects:
- Mitigation or monitoring plan (if needed):

## Related Issues / PRs
<!--
Issue numbers or related PRs
-->
- Fixes #
