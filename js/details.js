var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: '7s9alkgveov0',
    accessToken: 'dJJYa0G8qLauS_hyeAunluoNCFtOvabKgP-wGDHwLjo',
  });

  client.getEntry(id).then(function (entry) {

    var item = document.createElement("div");
    item.classList.add("item");

        var title = document.createElement('h2');
        title.innerHTML = entry.fields.title;
        document.getElementById("place-for-content-details").append(title);
        console.log(entry);

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
        
        var gallery = document.createElement('div');
        entry.fields.gallery.forEach(function (img) {
            var galleryImage = document.createElement('img');
            galleryImage.src = img.fields.file.url;
            gallery.append(galleryImage);

        });
        document.getElementById("place-for-content-details").append(hero);
        document.getElementById("gallery").append(gallery);
        document.getElementById("place-for-content-details").append(description);
  });