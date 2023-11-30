export default personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      // const prev = action.prev;
      // const current = action.current;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        })
      };
    }
  }
}
