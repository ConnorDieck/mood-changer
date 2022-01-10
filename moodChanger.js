moodSpace = document.querySelector("#mood");

happyBtn = document.querySelector("#happy");
sadBtn = document.querySelector("#sad");
angryBtn = document.querySelector("#angry");
confusedBtn = document.querySelector("#confused");

happyBtn.addEventListener("click", function(e) {
	console.log("HAPPY");
	store.dispatch({ type: "HAPPY" });
	const state = store.getState();
	console.log(state);
	moodSpace.innerHTML = "^_^";
});

sadBtn.addEventListener("click", function(e) {
	store.dispatch({ type: "SAD" });
	const state = store.getState();
	console.log(state);
	moodSpace.innerHTML = "(ᵕ̣̣̣̣̣̣﹏ᵕ̣̣̣̣̣̣)";
});

angryBtn.addEventListener("click", function(e) {
	store.dispatch({ type: "ANGRY" });
	const state = store.getState();
	console.log(state);
	moodSpace.innerHTML = "(#｀皿´)";
});

confusedBtn.addEventListener("click", function(e) {
	store.dispatch({ type: "CONFUSED" });
	const state = store.getState();
	console.log(state);
	moodSpace.innerHTML = "ఠ_ఠ";
});
