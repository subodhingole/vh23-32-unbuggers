export async function fetchUser(userId) {
  // try {
  //   connectToDB();

  //   return await User.findOne({ id: userId }).populate({
  //     path: "communities",
  //     model: Community,
  //   });
  // } catch (error) {
  //   throw new Error(`Failed to fetch user: ${error.message}`);
  // }

  return {
    id: "1",
    communities: [],
  };
}
