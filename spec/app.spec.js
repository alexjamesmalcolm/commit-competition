describe("app.js", () => {
	describe("Developer", () => {
		it("Should have a name", () => {
			const name = "Alex";
			const underTest = new Developer(name);
			expect(underTest.getName()).toEqual(name);
		});
		it("should have a username", () => {
			const username = "alexjamesmalcolm"
			const underTest = new Developer("", username);
			expect(underTest.getUsername()).toEqual(username);
		});
		it("should have a team", () => {
			const team = "team 1";
			const underTest = new Developer("", "", team);
			expect(underTest.getTeam()).toEqual(team);
		});
	});
});