import db from '@/database'

export function find (id) {
  const opt = {
    _id: id
  }
  return new Promise(function (resolve, reject) {
    db.findOne(opt, function (err, doc) {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })
  })
}

export async function store (info) {
  var id = 0
  await db.insert(info, (err, newDoc) => {
    id = newDoc._id
    if (err) {
      console.log(err)
    }
  })
  return id
}

export async function index (params) {
  const result = {
    data: [],
    total: 0
  }
  await db.find(params, (err, docs) => {
    result.data = docs
    if (err) {
      console.log(err)
    }
  })
  await db.count(params, (err, count) => {
    result.total = count
    if (err) {
      console.log(err)
    }
  })
  return result
}
