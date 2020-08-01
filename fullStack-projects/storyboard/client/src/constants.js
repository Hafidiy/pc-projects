export const Api = async (link, data = null, type = 'GET') => {
  
  let opts = {
    method: type,
    headers: {'Content-Type': 'application/json'}
  }

  if(data) {
    opts.body = JSON.stringify(data)
  }

  try {
    let res = await fetch(`/api/${link}`, opts)
    res = await res.json()
    return res
  } catch(err) {
    return err
  }
  
}

export const navItems = [
  'Home',
  'Story of the day',
  'Search',
  'Categories',
  // 'Subscribe',
]

export const categories = [
  'Action and adventure',
  'Art',
  'Alternate history',
  'Autobiography',
  'Anthology',
  'Biography',
  'Chick lit',
  'Book review',
  'Children\'s',
  'Cookbook',
  'Comic book',
  'Diary',
  'Coming-of-age',
  'Dictionary',
  'Crime',
  'Encyclopedia',
  'Drama',
  'Guide',
  'Fairytale',
  'Health',
  'Fantasy',
  'History',
  'Graphic novel',
  'Journal',
  'Historical fiction',
  'Math',
  'Horror',
  'Memoir',
  'Mystery',
  'Prayer',
  'Paranormal romance',
  'Religion, spirituality, and new age',
  'Picture book',
  'Textbook',
  'Poetry',
  'Review',
  'Political thriller',
  'Science',
  'Romance',
  'Self help',
  'Satire',
  'Travel',
  'Science fiction',
  'True crime',
  'Short story',
  'Suspense',
  'Thriller',
  'Young adult',
]