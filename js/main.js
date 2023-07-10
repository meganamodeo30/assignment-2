var client = contentful.createClient({
    space: '7s9alkgveov0',
    accessToken: 'dJJYa0G8qLauS_hyeAunluoNCFtOvabKgP-wGDHwLjo',
  });

//   console.log("Worked!");
//   console.log(client);

// get all items from contentful - call that data 'entries'
client.getEntries({content_type: 'savoriaBistro'}).then(function (entries) {
    // log the title for all the entries that have it
    // console.log(entries);
    // loop through each entry, call it 'entry'
    entries.items.forEach(function (entry) {
      var item = document.createElement("div");
      item.classList.add("item");

      var title = document.createElement("h2");
      title.innerHTML = entry.fields.title;
      item.append(title);

      var description = document.createElement("p");
      description.innerHTML = entry.fields.description;
      item.append(description);

      if (entry.fields.hero){
        var hero = document.createElement("img");
        hero.src = entry.fields.hero.fields.file.url;
        hero.classList.add("hero");
        hero.alt = entry.fields.hero.fields.description;
        item.append(hero);
      }
    
      var getDetails = document.createElement('a');
      getDetails.innerHTML = "get details";
      getDetails.href = "details.html?id=" + entry.sys.id;
      item.append(getDetails);

      document.getElementById("place-for-content").append(item);
        // structure will always be entry.fields.nameoffield
      console.log("title:" + entry.fields.title);
      console.log("desc:" + entry.fields.description);

      console.log(entry.fields.hero.fields.file.url);
    });
  });