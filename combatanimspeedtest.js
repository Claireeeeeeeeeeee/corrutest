//TODO: Add a dialogue with moth to change this..?

//This works wayyy better
//sets it for all objects which might be a mistake but
//ADVANCE_RATE is only used for combat stuff so
//but for example this means there is 0 delay before entering a bullet hell segment
//which might be fine
Object.defineProperty(env, "ADVANCE_RATE", {
  get: () => 100,
  set: () => {}, // ignore any attempts to change it
  configurable: true
});

