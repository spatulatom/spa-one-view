// async function handler(req, res) {
//   if (req.method !== 'GET') {
//     res.status(401).json({ message: 'Not a GET request' });
//     return;
//   }

//   try {
//     const response = await fetch('https://reqres.in/api/products?page=1&per_page=5?');
//     if (response.ok) {
//       const data = await response.json();
//       console.log('dataaaa', data);

//       res.status(201).json({ data: data });
//     } else {
//       throw new Error(data.message || 'Something went wrong!');
//     }
//   } catch (error) {
//     console.log('dataaaa2', error);
//     res.status(error.status || 500).json({ err: error.message });
//   }
// }

// export default handler;
