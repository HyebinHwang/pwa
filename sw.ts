self.addEventListener("install", (e) => {
  console.log("installed");
});

// activate event
self.addEventListener("activate", (e) => {
  console.log("actived", e);
});

// fetch event
self.addEventListener("fetch", (e) => {
  console.log("fetched resource ");
});
