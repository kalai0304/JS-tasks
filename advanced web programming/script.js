async function fetchUsersAndPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userlist = await response.json();
    // Fetch recent activity/posts for each user

    const userActivityPromise = userlist.map((user) =>
      fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      ).then((res) => res.json())
    );
    //  Wait for all activity/posts to be fetched
    const userActivity = await Promise.all(userActivityPromise);
    // Combine user and activity data
    const userWithPosts = userlist.map((user, index) => ({
      ...user,
      posts: userActivity[index],
    }));
    console.log("user with posts", userWithPosts);
    const userList = document.getElementById("userList");
    // display the username and posts
    userWithPosts.forEach((user, index) => {
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      h3.innerText = `User name: ${user.name}`;
      div.appendChild(h3);
      const p = document.createElement("p");
      p.innerText = "Recent posts";
      div.appendChild(p);
      const ul = document.createElement("ul");
      user.posts.forEach((post) => {
        const li = document.createElement("li");
        li.innerText = `${post.title}`;
        ul.appendChild(li);
      });
      div.appendChild(ul);
      userList.appendChild(div);
    });
  } catch (error) {
    console.log("Error fetching data" + error);
  }
}

fetchUsersAndPosts();
