# matomo-springshare
snippets for matomo on springshare
## Database Links as Outlinks
We use the database links in springshare as shorturls. Because they have the same domain as libguides, they aren't tracked by default as outlinks. For the links we want to track to see user flow, we add the class='matomo_link' to a link. For the database lists as widgets, I created a small snippet that grabs all links within a div id and adds the class with a delay of 4 seconds. See the databasematomo.js snippet file.
