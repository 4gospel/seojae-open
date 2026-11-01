// 아침 서재 공개판은 새 주소(morningseojae.github.io/seojae-open)로 옮겼습니다 — 예전 주소의 오프라인 사본을 지우고 물러납니다
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (/^seojae-open/.test(k)) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: "window" })) { try { c.navigate(c.url); } catch (_) {} }
})()));
