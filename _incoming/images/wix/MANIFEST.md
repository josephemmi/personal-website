# Wix image manifest

21 images across the site are still hotlinked to `static.wixstatic.com`
(the old Wix site). This sandbox's network policy blocks outbound requests
to that host, so I can't fetch them directly — you'll need to download
each one and drop it in `_incoming/images/wix/` with the exact filename
listed below. Once they're all there, tell me and I'll move them into
`images/`, organized by page, and rewrite every `<img src="...">` /
`background-image` reference to point at the local copy.

**How to save each one:** open the URL in a new browser tab, right-click
the image → "Save Image As", and use the target filename exactly as
written (case-sensitive, no spaces).

## about.html

| Save as | Source URL |
|---|---|
| `about-profile.jpg` | https://static.wixstatic.com/media/a1f149_2311059800494d448292b361a377266b~mv2.jpg |

## work/agatha.html (+ its thumbnail on work.html)

| Save as | Source URL |
|---|---|
| `agatha-flow-1.png` | https://static.wixstatic.com/media/a1f149_7052b1cf304545fa92ae353e5b6ea780~mv2_d_2928_2071_s_2.png |
| `agatha-flow-2.png` | https://static.wixstatic.com/media/a1f149_9c36f80100714fdf9e768e4d66d12c74~mv2_d_3028_2142_s_2.png |
| `agatha-flow-3.png` | https://static.wixstatic.com/media/a1f149_5092061fddd1417898c7c8dbc147e933~mv2_d_3049_2156_s_2.png |
| `agatha-storyboard-1.jpg` | https://static.wixstatic.com/media/a1f149_09781eef52754450b181cb8079a409cf~mv2_d_1754_1239_s_2.jpg |
| `agatha-storyboard-2.jpg` | https://static.wixstatic.com/media/a1f149_d6aa655f0a4146f1bc7f9dc5955c33cc~mv2_d_1754_1239_s_2.jpg |
| `agatha-sketch-1.jpg` | https://static.wixstatic.com/media/a1f149_425b597af2494da1bb00aa5d3577ddf8~mv2_d_1754_1217_s_2.jpg |
| `agatha-sketch-2.jpg` | https://static.wixstatic.com/media/a1f149_99e7f10e68e04bc69bf885fe7b5121d4~mv2_d_1752_1239_s_2.jpg |
| `agatha-sketch-3.jpg` | https://static.wixstatic.com/media/a1f149_719e2743d398430a96da78e21f7c996e~mv2_d_1754_1239_s_2.jpg |
| `agatha-editorial-runner.jpg` | https://static.wixstatic.com/media/a1f149_7c2873efc813475fb13e7e679cd4ca6b~mv2_d_3337_2201_s_2.jpg |
| `agatha-website-screenshot.png` | https://static.wixstatic.com/media/a1f149_99bfd6d0ffd04c5bbca5a35a0154c66a~mv2_d_2864_1398_s_2.png |

## work/alexa-skill.html (+ its thumbnail on work.html)

| Save as | Source URL |
|---|---|
| `alexa-skill-cover.png` | https://static.wixstatic.com/media/a1f149_2d2b92fcd7a745788bdaf389e393caa9~mv2.png |

## work/sw-one.html (+ its thumbnail on work.html)

| Save as | Source URL |
|---|---|
| `sw-one-cover.jpg` | https://static.wixstatic.com/media/a1f149_cd830269a1c54a6fa45c2b982e5193c4~mv2.jpg |
| `sw-one-requirements-1.png` | https://static.wixstatic.com/media/a1f149_a276ba6b92e04b30b01e2f3481331821~mv2_d_2029_2868_s_2.png |
| `sw-one-requirements-2.png` | https://static.wixstatic.com/media/a1f149_69f14e1acb9d4554814b16ae9b413fb6~mv2_d_2142_3028_s_2.png |
| `sw-one-journey-1.png` | https://static.wixstatic.com/media/a1f149_043afe56a24c4447b449d85e8d0377d5~mv2_d_3106_2197_s_2.png |
| `sw-one-journey-2.png` | https://static.wixstatic.com/media/a1f149_e11528c18f894ceca27e33574ba16c5f~mv2_d_3040_2150_s_2.png |
| `sw-one-journey-3.png` | https://static.wixstatic.com/media/a1f149_0076090eb14e4662b8634ec6ef34ffc7~mv2_d_2964_2096_s_2.png |
| `sw-one-detail-1.jpg` | https://static.wixstatic.com/media/a1f149_268fbd22990e439ea5fa31c500a6695e~mv2_d_2880_1561_s_2.jpg |
| `sw-one-detail-2.png` | https://static.wixstatic.com/media/a1f149_645d7e05ed2646b9b8ec426d881ce4c0~mv2_d_2880_1559_s_2.png |
| `sw-one-detail-3.png` | https://static.wixstatic.com/media/a1f149_505de6a2d6754316a38cb52157508aaa~mv2.png |

Note: a few of these (the Agatha, SW One and Alexa Skill cover images) are
reused as both the full-size image on their case-study page *and* the
small thumbnail in the "Professional case studies" list on `work.html` —
that's why some URLs above are listed as covering two spots. You only
need to save each source image once; I'll wire up both references to the
one local file.
