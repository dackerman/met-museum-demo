# Changelog

## 0.1.0-alpha.3 (2025-06-03)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/dackerman/met-museum-demo/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** update via SDK Studio ([c05a5f4](https://github.com/dackerman/met-museum-demo/commit/c05a5f41f144e9230b0ec9de40fbfdc195a317b3))
* **api:** update via SDK Studio ([#11](https://github.com/dackerman/met-museum-demo/issues/11)) ([1a21d67](https://github.com/dackerman/met-museum-demo/commit/1a21d6727fc95e6cd2a4bd126b5c57325b501f81))
* **api:** update via SDK Studio ([#13](https://github.com/dackerman/met-museum-demo/issues/13)) ([ddd709d](https://github.com/dackerman/met-museum-demo/commit/ddd709d10dcf37e8397b683ce4f490a20f358841))
* **api:** update via SDK Studio ([#15](https://github.com/dackerman/met-museum-demo/issues/15)) ([23b2a3d](https://github.com/dackerman/met-museum-demo/commit/23b2a3da7866015ce6be11d1506591c110db4adb))
* **api:** update via SDK Studio ([#19](https://github.com/dackerman/met-museum-demo/issues/19)) ([5e9d515](https://github.com/dackerman/met-museum-demo/commit/5e9d515a06cbac6063de10df1986dc8ebe3ec093))
* **api:** update via SDK Studio ([#21](https://github.com/dackerman/met-museum-demo/issues/21)) ([44a0baf](https://github.com/dackerman/met-museum-demo/commit/44a0baf6224badd32a588895bf576d56384e2d4e))
* **client:** add withOptions helper ([002f0d7](https://github.com/dackerman/met-museum-demo/commit/002f0d7d663c72631300e171163e442719e024d9))
* **mcp:** include http information in tools ([59e356b](https://github.com/dackerman/met-museum-demo/commit/59e356ba8ece1f198c3c5ba0f70456cbb33cd553))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([82ad766](https://github.com/dackerman/met-museum-demo/commit/82ad766d0679d478974125044ac6ba9b5bad56b5))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#17](https://github.com/dackerman/met-museum-demo/issues/17)) ([4f52c11](https://github.com/dackerman/met-museum-demo/commit/4f52c112585ae8f475b8a552799957cf08f96521))
* **client:** always overwrite when merging headers ([cda6d70](https://github.com/dackerman/met-museum-demo/commit/cda6d703ce0338c6a1f29d4d108973ab8ddd31ef))
* **client:** send all configured auth headers ([#23](https://github.com/dackerman/met-museum-demo/issues/23)) ([1a3e730](https://github.com/dackerman/met-museum-demo/commit/1a3e730c090844f21798ce3cd0ac9e12173f2e35))
* compat with more runtimes ([eda33e4](https://github.com/dackerman/met-museum-demo/commit/eda33e4f227f7129a1529d948e87e57bf175566e))
* **internal:** fix file uploads in node 18 jest ([9fb6a40](https://github.com/dackerman/met-museum-demo/commit/9fb6a40c8b5e148548ce3d9f12cc9f68d8dd3be2))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([90e9e50](https://github.com/dackerman/met-museum-demo/commit/90e9e50eb4e9e7840d167ec03847adfda7806111))
* **mcp:** fix cursor schema transformation issue with recursive references ([67d9071](https://github.com/dackerman/met-museum-demo/commit/67d907127b42c758a56e408eb2429418b4cbdf13))
* **mcp:** include description in dynamic tool search ([22066fc](https://github.com/dackerman/met-museum-demo/commit/22066fc03c2668f0b7706a3fd3be7136e3908cac))
* **mcp:** remove unused tools.ts ([#22](https://github.com/dackerman/met-museum-demo/issues/22)) ([c942db2](https://github.com/dackerman/met-museum-demo/commit/c942db2e588057220b58b8af5bd1ced39823ae1f))


### Chores

* adjust eslint.config.mjs ignore pattern ([1019b44](https://github.com/dackerman/met-museum-demo/commit/1019b44d7267d6bb7c05b02578a4522ce6e4627d))
* **build:** automatically build subpackages if present ([c256e1f](https://github.com/dackerman/met-museum-demo/commit/c256e1fbe3c0d0c3f0504a685450159135f849b5))
* **ci:** add timeout thresholds for CI jobs ([6b8b96d](https://github.com/dackerman/met-museum-demo/commit/6b8b96d40fa8b496a813fbacac559babbff8791b))
* **ci:** only use depot for staging repos ([da87ca9](https://github.com/dackerman/met-museum-demo/commit/da87ca94468840da6b684f8fabec57e7cf2f260b))
* **client:** drop support for EOL node versions ([b00e454](https://github.com/dackerman/met-museum-demo/commit/b00e454e23d341f52b25a99410e0908a15d6fb7f))
* **client:** minor internal fixes ([1b0b288](https://github.com/dackerman/met-museum-demo/commit/1b0b28830b7832e359d997e213c181ffbee687e7))
* configure new SDK language ([#12](https://github.com/dackerman/met-museum-demo/issues/12)) ([c019638](https://github.com/dackerman/met-museum-demo/commit/c019638273c03927a517b86ff5880139a924b22d))
* configure new SDK language ([#14](https://github.com/dackerman/met-museum-demo/issues/14)) ([29483d2](https://github.com/dackerman/met-museum-demo/commit/29483d20662d3de23a3bb9c00d125fe7f6b87f90))
* configure new SDK language ([#16](https://github.com/dackerman/met-museum-demo/issues/16)) ([3bc57e4](https://github.com/dackerman/met-museum-demo/commit/3bc57e47a629c5ac0518f1a77134088be8605f99))
* configure new SDK language ([#20](https://github.com/dackerman/met-museum-demo/issues/20)) ([fc9f6eb](https://github.com/dackerman/met-museum-demo/commit/fc9f6ebf7c1265ff8a3f6b57afb5d434cb9424bf))
* **deps:** bump eslint-plugin-prettier ([56b6681](https://github.com/dackerman/met-museum-demo/commit/56b66812fc554c190b35393e9c289a07c85ebaad))
* **docs:** grammar improvements ([7c47ca5](https://github.com/dackerman/met-museum-demo/commit/7c47ca57b0e947a52427613bad3b72725756614f))
* improve publish-npm script --latest tag logic ([d478232](https://github.com/dackerman/met-museum-demo/commit/d4782321687e7b8e895d126714bc16a718332525))
* **internal:** codegen related update ([704e229](https://github.com/dackerman/met-museum-demo/commit/704e229359dd0e81a881c38c36a0691b777d60a3))
* **internal:** codegen related update ([64fc589](https://github.com/dackerman/met-museum-demo/commit/64fc5894469f9f5ba3a0158be38b580d89b24e65))
* **internal:** codegen related update ([7318da8](https://github.com/dackerman/met-museum-demo/commit/7318da8c8361c732ee5570fcabf30eb96028ae80))
* **internal:** codegen related update ([068fa07](https://github.com/dackerman/met-museum-demo/commit/068fa072591e8dfe1a6f0f5adcd37beaf7645311))
* **internal:** improve node 18 shims ([4003b94](https://github.com/dackerman/met-museum-demo/commit/4003b94ddea218739dbf79f181193c122c7bdb1e))
* **internal:** reduce CI branch coverage ([df456e3](https://github.com/dackerman/met-museum-demo/commit/df456e3b3736b6eb9eaf33a1b26831381bae1e13))
* **internal:** refactor utils ([5b9c985](https://github.com/dackerman/met-museum-demo/commit/5b9c985a0098b3d35d1a1e0ee5e5134a248f2e3b))
* **internal:** share typescript helpers ([307b167](https://github.com/dackerman/met-museum-demo/commit/307b167d2197ec54f0577bad9397228c52377d95))
* **internal:** update jest config ([9f543a5](https://github.com/dackerman/met-museum-demo/commit/9f543a57d22696cf8d1b5fca70be0312baa66119))
* **internal:** upload builds and expand CI branch coverage ([3fa47fd](https://github.com/dackerman/met-museum-demo/commit/3fa47fd652803e14e64a0ff20eb0d8b3861854fa))
* **internal:** version bump ([#8](https://github.com/dackerman/met-museum-demo/issues/8)) ([d71a35d](https://github.com/dackerman/met-museum-demo/commit/d71a35dcf3db467682bd28c0d99fe8c28d235df1))
* **mcp:** remove duplicate assignment ([27ad730](https://github.com/dackerman/met-museum-demo/commit/27ad73011795cd920ee4b0a1ac82822d3df342ff))
* **package:** remove engines ([440f999](https://github.com/dackerman/met-museum-demo/commit/440f99987a5aca054c4727038d25aec4c235d5a0))
* **perf:** faster base64 decoding ([c684869](https://github.com/dackerman/met-museum-demo/commit/c68486936604ca1a8acbe7b413880dec5d88da6b))
* **tests:** use node 22 for CI tests ([7702e58](https://github.com/dackerman/met-museum-demo/commit/7702e58adc46d063dfac95ad063c0a7be6c78c4d))


### Documentation

* **mcp:** improve MCP readme docs ([#18](https://github.com/dackerman/met-museum-demo/issues/18)) ([53e2683](https://github.com/dackerman/met-museum-demo/commit/53e268388891e7fb6b578cc3452aa42881bf9790))
* **readme:** fix typo ([e5ce407](https://github.com/dackerman/met-museum-demo/commit/e5ce407ba8ab6f86e9bc7e90457c77ea445f11d9))

## 0.1.0-alpha.2 (2025-04-03)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/dackerman/met-museum-demo/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** update via SDK Studio ([#7](https://github.com/dackerman/met-museum-demo/issues/7)) ([a1f4e6c](https://github.com/dackerman/met-museum-demo/commit/a1f4e6c8217fbe804a1b9d5a15d1b97e5aa55b22))


### Chores

* **internal:** version bump ([#5](https://github.com/dackerman/met-museum-demo/issues/5)) ([a545e61](https://github.com/dackerman/met-museum-demo/commit/a545e6156f200e75b10fceb25fb52a5bc5065048))

## 0.1.0-alpha.1 (2025-04-03)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/dackerman/met-museum-demo/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([#1](https://github.com/dackerman/met-museum-demo/issues/1)) ([6c8bd75](https://github.com/dackerman/met-museum-demo/commit/6c8bd750de079e350b25cb22a7244eb009c867db))
* **api:** update via SDK Studio ([#4](https://github.com/dackerman/met-museum-demo/issues/4)) ([6ef1576](https://github.com/dackerman/met-museum-demo/commit/6ef1576ce7b71da0a924e3fb28f17c8f2af4e3b1))


### Chores

* go live ([06eea67](https://github.com/dackerman/met-museum-demo/commit/06eea6758b3ebae1ec8e7195eb997d46b0dfa929))
* update SDK settings ([#3](https://github.com/dackerman/met-museum-demo/issues/3)) ([d15a9ab](https://github.com/dackerman/met-museum-demo/commit/d15a9ab21e99957f461ae81202ff719f2a245d92))
