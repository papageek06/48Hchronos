(function () {
  const GAME_KEY = "aquago.game.state.v1";
  const WATER_KEY = "aquago.water.startAt.v2";
  const TRIAL_KEYS = ["plomberie", "lock", "tableau"];
  const DURATION_MS = 12 * 60 * 1000;

  function defaultState() {
    return {
      startedAt: null,
      completed: {
        plomberie: false,
        lock: false,
        tableau: false
      }
    };
  }

  function readState() {
    try {
      const raw = localStorage.getItem(GAME_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return {
        startedAt: Number.isFinite(parsed?.startedAt) ? parsed.startedAt : null,
        completed: {
          plomberie: Boolean(parsed?.completed?.plomberie),
          lock: Boolean(parsed?.completed?.lock),
          tableau: Boolean(parsed?.completed?.tableau)
        }
      };
    } catch (_) {
      return defaultState();
    }
  }

  function writeState(state) {
    localStorage.setItem(GAME_KEY, JSON.stringify(state));
  }

  function getState() {
    return readState();
  }

  function ensureWaterStart(state) {
    if (!state.startedAt) return;
    const rawWater = Number(localStorage.getItem(WATER_KEY));
    if (!Number.isFinite(rawWater) || rawWater <= 0) {
      localStorage.setItem(WATER_KEY, String(state.startedAt));
    }
  }

  function startGame() {
    const state = readState();
    if (!state.startedAt) {
      state.startedAt = Date.now();
      writeState(state);
    }
    ensureWaterStart(state);
    return state;
  }

  function resetGame() {
    localStorage.removeItem(GAME_KEY);
    localStorage.removeItem(WATER_KEY);
    localStorage.removeItem("cart");
  }

  function isStarted() {
    return Boolean(readState().startedAt);
  }

  function getCompletedCount() {
    const state = readState();
    return TRIAL_KEYS.filter((key) => Boolean(state.completed[key])).length;
  }

  function isTrialComplete(key) {
    const state = readState();
    return Boolean(state.completed[key]);
  }

  function completeTrial(key) {
    if (!TRIAL_KEYS.includes(key)) {
      return { changed: false, count: getCompletedCount() };
    }

    const state = readState();
    if (state.completed[key]) {
      return { changed: false, count: getCompletedCount() };
    }

    state.completed[key] = true;
    writeState(state);
    return { changed: true, count: TRIAL_KEYS.filter((trialKey) => state.completed[trialKey]).length };
  }

  function isCombatUnlocked() {
    return getCompletedCount() === TRIAL_KEYS.length;
  }

  function getRemainingMs() {
    const state = readState();
    if (!state.startedAt) return DURATION_MS;
    const elapsed = Math.max(0, Date.now() - state.startedAt);
    return Math.max(0, DURATION_MS - elapsed);
  }

  function isGameOver() {
    const state = readState();
    if (!state.startedAt) return false;
    return getRemainingMs() <= 0 && !isCombatUnlocked();
  }

  function requireStartedOrRedirect() {
    if (isStarted()) return true;
    window.location.replace("index.html");
    return false;
  }

  function requireCombatOrRedirect() {
    if (isCombatUnlocked()) return true;
    window.location.replace("index.html?locked=combat");
    return false;
  }

  function redirectIfGameOver() {
    if (isGameOver()) {
      window.location.replace("index.html?gameover=1");
      return true;
    }
    return false;
  }

  window.GameState = {
    GAME_KEY,
    WATER_KEY,
    TRIAL_KEYS,
    DURATION_MS,
    getState,
    startGame,
    resetGame,
    isStarted,
    getCompletedCount,
    isTrialComplete,
    completeTrial,
    isCombatUnlocked,
    getRemainingMs,
    isGameOver,
    requireStartedOrRedirect,
    requireCombatOrRedirect,
    redirectIfGameOver
  };
})();
