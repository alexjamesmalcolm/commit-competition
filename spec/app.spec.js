describe("app.js", () => {
	describe("Developer", () => {
		it("Should have a name", () => {
			const name = "Alex";
			const underTest = new Developer("", name);
			expect(underTest.name).toEqual(name);
		});
		it("should have a username", () => {
			const username = "alexjamesmalcolm"
			const underTest = new Developer(username);
			expect(underTest.username).toEqual(username);
		});
		it("should have a team", () => {
			const team = "team 1";
			const underTest = new Developer("", "", team);
			expect(underTest.team).toEqual(team);
		});
	});
});