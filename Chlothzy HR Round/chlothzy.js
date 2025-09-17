// ------------------ DATA (real product info + images) ------------------
const PRODUCTS = [{
    id: 1,
    name: "Casual Shirt",
    cat: "Casual Shirt",
    price: 899,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHD6O1yflke-v3yg2xiRMNsjzM8ECmtUWbCoqjL2HfynsXCARyC-YM2hkSXqNmSkG8j7Z2kr5nCyO5S8L3okvyYT9P66x1KOL-_uVTBqtgxV5b913qu0kC",
    colors: [
      { name: "White", hex: "#f5f5f5", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHD6O1yflke-v3yg2xiRMNsjzM8ECmtUWbCoqjL2HfynsXCARyC-YM2hkSXqNmSkG8j7Z2kr5nCyO5S8L3okvyYT9P66x1KOL-_uVTBqtgxV5b913qu0kC" },
      { name: "Black", hex: "#111111" , img : "https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/s/s/fit-in/1000x1333/ss-24_4000x5000-04-10-24_mfs-14939-s-01-black_1_mfs-14939-s-01-black.jpg" },
      { name: "Navy Blue", hex: "#1d3557" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelHHpRuJpyFBD-LyMalL5YQPwos05lWOYww&s" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Slim Fit Pant",
    cat: "Pant",
    price: 1199,
    img: "https://pantproject.com/cdn/shop/files/DSC1045_6474c1f4-97e1-46ce-b7c1-1442379f84b6_800x.jpg?v=1743609329",
    colors: [
      { name: "Navy", hex: "#1d3557" , img: "https://pantproject.com/cdn/shop/files/DSC1045_6474c1f4-97e1-46ce-b7c1-1442379f84b6_800x.jpg?v=1743609329"},
      { name: "Khaki", hex: "#b49a67" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMP5TsiA60qLIp6lKY77Lr8lk8EEX-_-JHLQ&s" },
    ],
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: 3,
    name: "Classic Blue Jeans",
    cat: "Jeans",
    price: 1399,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxM4mrTVjZJ5iPtdnDq5MCGAmttXvupYiKP_2mxTpKQ3yrDiOSqOfol5G9sXJOq6OWPtc9umoOZulYN3geqQw9w4ZaL6vjZQYZ-6zfqTRlwwgR5iLNRs5OmKzE_AO8erZNMwho5yU&usqp=CAc",
    colors: [
      { name: "Indigo", hex: "#264653" , img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxM4mrTVjZJ5iPtdnDq5MCGAmttXvupYiKP_2mxTpKQ3yrDiOSqOfol5G9sXJOq6OWPtc9umoOZulYN3geqQw9w4ZaL6vjZQYZ-6zfqTRlwwgR5iLNRs5OmKzE_AO8erZNMwho5yU&usqp=CAc" },
      { name: "Dark", hex: "#0f172a" , img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSci3WqEz6YzU5wo6bg5P6VivZe2-Rv0AMVhiJO_FAiYnciybPmWS7JbyxEqwMed2jdohNBAaEHpX14JYV4cTrfHWXbchz09GqKJXf-z89ew16xP3GflaF0PA&usqp=CAc" },
    ],
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: 4,
    name: "T-Shirt",
    cat: "T-Shirt",
    price: 599,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4Cqtz8rsNIzl743LyOyaxCcvpdIGSI1MSH3JTbzVzoV64IdOZHML86UhN7vx2LERL8Cb-W6WWvGvEKyy88Do1pCjubDMjShu7G_bXFaMl5CV6Nb0s0rGGSg&usqp=CAc",
    colors: [
      { name: "White", hex: "#ffffff", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4Cqtz8rsNIzl743LyOyaxCcvpdIGSI1MSH3JTbzVzoV64IdOZHML86UhN7vx2LERL8Cb-W6WWvGvEKyy88Do1pCjubDMjShu7G_bXFaMl5CV6Nb0s0rGGSg&usqp=CAc" },
      { name: "Sky", hex: "#93c5fd", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSf9vMWVSjibXBW0Ys6zy3ccik9dD7iswnWw&s" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Comfort Lower",
    cat: "Lower",
    price: 799,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsQq0vRouX90OLd3SQ4aWDbL5GkO6Jpl2Kg&s",
    colors: [
      { name: "Charcoal", hex: "#374151", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsQq0vRouX90OLd3SQ4aWDbL5GkO6Jpl2Kg&s" },
      { name: "Black", hex: "#111111", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4_5koWkzDaLj9UawYLTsyFNr2Cv-hDLbhsj5JFuJD9xDD6-h_LthRxPkvN89lsfOmkDogEQInOqiQkv4h3CnZxUlrj4pdDzo0YQqaaY9om57l3H11gYTEUw" },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 6,
    name: "Graphic T-Shirt",
    cat: "T-Shirt",
    price: 699,
    img: "https://desidoodles.in/cdn/shop/files/flatlay-oversized-tshirt-mockup-in-modern-style-0306-2024-09-24T130627.494.png?v=1727282952",
    colors: [
      { name: "Black", hex: "#111111", img: "https://desidoodles.in/cdn/shop/files/flatlay-oversized-tshirt-mockup-in-modern-style-0306-2024-09-24T130627.494.png?v=1727282952" },
      { name: "Olive", hex: "#6b8e23", img: "https://www.myprotein.co.in/images?url=https://static.thcdn.com/productimg/original/14606710-1575108931387690.jpg&format=webp&auto=avif&crop=1100,1200,smart" },
      { name: "Maroon", hex: "#7b1e1e", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YKoR6FGcs5vPmFy00-18eX_Eoa9ls1p_BA&s" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Party Wear Dress - Noir",
    cat: "Party Wear Dress",
    price: 2499,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraLVGhkTa4zTW4fbLUM2B0eMoFpI3_xK5pA&s",
    colors: [
      { name: "Noir", hex: "#111111" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraLVGhkTa4zTW4fbLUM2B0eMoFpI3_xK5pA&s"},
      { name: "Ruby", hex: "#a4161a" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdof5uFcX3rxT2S0HoOf-9vBNFPtsBKNp9w&s"},
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 8,
    name: "Linen Casual Shirt",
    cat: "Casual Shirt",
    price: 1199,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPQpbvcwD9DLTi97PrsFi_kFX6_PWzaD2Mw&s",
    colors: [
      { name: "Beige", hex: "#e8d5b7", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAEclI13x--izvNVErJd3Tmwvok9eBlWKdA&s" },
      { name: "Mint", hex: "#a7f3d0", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQzx5vZtLHXtCf4vXqccDIcyaZy62L57SYQ&s" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
]; // Products ka data: name, category, price, colors, sizes

// ------------------ ELEMENTS (DOM se uthaye gaye) ------------------
const grid = document.getElementById("grid");        // Product grid
const chips = document.querySelectorAll(".chip");   // Category filter buttons
const q = document.getElementById("q");             // Search box
const cartBtn = document.getElementById("openCart");// Cart open button
const cartCount = document.getElementById("cartCount"); // Cart count badge
const drawer = document.getElementById("drawer");   // Cart drawer
const closeCart = document.getElementById("closeCart"); // Close cart button
const lines = document.getElementById("lines");     // Cart items list
const subtotalEl = document.getElementById("subtotal"); // Subtotal element
const gstEl = document.getElementById("gst");       // GST element
const travelEl = document.getElementById("travel"); // Delivery charge
const totalEl = document.getElementById("total");   // Final total
const cancelBtn = document.getElementById("cancel");// Cancel button
const bookBtn = document.getElementById("book");    // Book order button

// ------------------ THEME PERSISTENCE (light/dark mode) ------------------
const modeBtn = document.getElementById("mode"); // Theme toggle button
const savedTheme = localStorage.getItem("clothzy_mode"); // Last saved theme
if (savedTheme === "dark") {
  document.body.classList.add("dark"); // Page dark mode me open hoga
}
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // Dark/Light toggle
  localStorage.setItem(
    "clothzy_mode",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// ------------------ STATE (cart & filter memory) ------------------
let activeFilter = "all";   // Active category filter
let selections = {};        // User ke product selections {color, size, qty}
let cart = [];              // Cart items array

// ------------------ HELPERS ------------------
const INR = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n); // Price ko INR format me convert karega

// Grid render (search + filter apply karke products show karega)
function renderGrid() {
  grid.innerHTML = "";
  const term = q.value.trim().toLowerCase();
  PRODUCTS.filter((p) => activeFilter === "all" || p.cat === activeFilter)
    .filter(
      (p) =>
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.cat.toLowerCase().includes(term)
    )
    .forEach((p) => grid.appendChild(renderCard(p)));
}

// Product card render (ek product ka UI banata hai)
function renderCard(p) {
  const card = document.createElement("article");
  card.className = "card";

  const cover = document.createElement("div");
  cover.className = "cover";
  const img = document.createElement("img");
  img.src = p.img;
  img.alt = p.name;
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = p.cat;
  cover.append(img, tag);
  card.appendChild(cover);

  const meta = document.createElement("div");
  meta.className = "meta";
  meta.innerHTML = `<h4>${p.name}</h4><p>${p.cat}</p>`;
  // Toast notification (cart me add hone ka message)
  function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2500); // 2.5 sec ke baad fade out
}


  // swatches
  const sw = document.createElement("div");
  sw.className = "swatches";
  p.colors.forEach((c, idx) => {
    const s = document.createElement("button");
    s.className = "swatch";
    s.style.background = c.hex;
    s.title = c.name;
  s.addEventListener("click", () => {
  selections[p.id] = selections[p.id] || { qty: 1 };
  selections[p.id].color = c;

  sw.querySelectorAll(".swatch").forEach((x) =>
    x.classList.remove("active")
  );
  s.classList.add("active");

  //  Product image change
  const productImg = card.querySelector("img");
  productImg.src = c.img;
});


    if (idx === 0) {
      s.classList.add("active");
      selections[p.id] = { ...(selections[p.id] || {}), color: c, qty: 1 };
    }
    sw.appendChild(s);
  });
  meta.appendChild(sw);

  // size
  const sizeSel = document.createElement("select");
  sizeSel.className = "sizeSel";
  p.sizes.forEach((sz) => {
    const o = document.createElement("option");
    o.value = sz;
    o.textContent = `Size: ${sz}`;
    sizeSel.appendChild(o);
  });
  sizeSel.addEventListener("change", () => {
    selections[p.id] = selections[p.id] || { qty: 1 };
    selections[p.id].size = sizeSel.value;
  });
  selections[p.id] = { ...(selections[p.id] || {}), size: p.sizes[0] };
  meta.appendChild(sizeSel);

  // qty + price row
  const row = document.createElement("div");
  row.className = "row";
  const price = document.createElement("div");
  price.className = "price";
  price.textContent = INR(p.price);
  const qty = document.createElement("div");
  qty.className = "qty";
  const minus = document.createElement("button");
  minus.textContent = "-";
  const num = document.createElement("span");
  num.textContent = String(selections[p.id]?.qty || 1);
  const plus = document.createElement("button");
  plus.textContent = "+";
  minus.addEventListener("click", () => {
    let v = Math.max(1, (selections[p.id]?.qty || 1) - 1);
    selections[p.id].qty = v;
    num.textContent = v;
  });
  plus.addEventListener("click", () => {
    let v = (selections[p.id]?.qty || 1) + 1;
    selections[p.id].qty = v;
    num.textContent = v;
  });
  qty.append(minus, num, plus);
  row.append(price, qty);
  meta.appendChild(row);

  // add button
  const add = document.createElement("button");
  add.className = "btn add";
  add.textContent = "Add to cart";
  add.addEventListener("click", () => {
    const sel = selections[p.id] || {
      color: p.colors[0],
      size: p.sizes[0],
      qty: 1,
    };
    const existing = cart.find(
      (it) =>
        it.id === p.id &&
        it.size === sel.size &&
        it.color.name === sel.color.name
    );
    if (existing) {
      existing.qty += sel.qty || 1;
    } else {
      cart.push({
        id: p.id,
        name: p.name,
        price: p.price,
        color: sel.color,
        size: sel.size,
        qty: sel.qty || 1,
        img: p.img,
      });
    }
    updateCart();
    showToast(`${p.name} added to cart. Thanks for visiting!`);

  });
  meta.appendChild(add);

  card.appendChild(meta);
  return card;
}

  // Swatches (color selection)
  // Sizes (dropdown select)
  // Qty + Price row (− / + button ke sath)
  // Add to Cart button (cart update + toast show)


// Cart update (items + qty refresh karega)
function updateCart() {
  cartCount.textContent = cart.reduce((n, it) => n + it.qty, 0);
  if (cart.length === 0) {
    lines.className = "empty";
    lines.textContent = "Your cart is empty.";
    calculateTotals();
    return;
  }

  lines.className = "";
  lines.innerHTML = "";
  cart.forEach((it, idx) => {
    const line = document.createElement("div");
    line.className = "line";
    const pic = document.createElement("img");
    pic.src = it.img;
    pic.alt = it.name;
    const info = document.createElement("div");
    info.innerHTML = `<h5>${it.name}</h5>
          <div class="muted"><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${
            it.color.hex
          };border:1px solid var(--line);vertical-align:middle;margin-right:6px"></span>${
      it.color.name
    } • Size ${it.size} • ${INR(it.price)} each</div>`;
    const ctr = document.createElement("div");
    ctr.className = "counter";
    const minus = document.createElement("button");
    minus.textContent = "−";
    const qty = document.createElement("span");
    qty.textContent = it.qty;
    const plus = document.createElement("button");
    plus.textContent = "+";
    const del = document.createElement("button");
    del.textContent = "✕";
    minus.addEventListener("click", () => {
      it.qty = Math.max(1, it.qty - 1);
      updateCart();
    });
    plus.addEventListener("click", () => {
      it.qty += 1;
      updateCart();
    });
    del.addEventListener("click", () => {
      cart.splice(idx, 1);
      updateCart();
    });
    ctr.append(minus, qty, plus, del);
    line.append(pic, info, ctr);
    lines.appendChild(line);
  });

  calculateTotals();
}

// Totals calculate (subtotal + gst + delivery + total)
function calculateTotals() {
  const subtotal = cart.reduce((n, it) => n + it.price * it.qty, 0);
  const travel = 50; // fixed charge; editable
  const taxable = subtotal + travel;
  const gst = Math.round(taxable * 0.18);
  const total = taxable + gst;
  subtotalEl.textContent = INR(subtotal);
  travelEl.textContent = INR(travel);
  gstEl.textContent = INR(gst);
  totalEl.textContent = INR(total);
}

// ------------------ EVENTS (UI interactivity) ------------------
chips.forEach((ch) =>
  ch.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    ch.classList.add("active");
    activeFilter = ch.dataset.filter;
    renderGrid();
  })
); // Category filter click
q.addEventListener("input", renderGrid); // Search input type
cartBtn.addEventListener("click", () => drawer.classList.add("open")); // Open cart
document.getElementById("closeCart").addEventListener("click", () => drawer.classList.remove("open")); // Close cart

cancelBtn.addEventListener("click", () => {
  cart = [];
  updateCart();
}); // Cart clear
bookBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty.");
    return;
  }
  const order = {
    items: cart,
    charges: { traveling: 50, gstRate: "18%" },
    totals: {
      subtotal: subtotalEl.textContent,
      gst: gstEl.textContent,
      total: totalEl.textContent,
    },
  };
  alert("Booking placed!\n\n" + JSON.stringify(order, null, 2));
  cart = [];
  updateCart();
  drawer.classList.remove("open");
});   // Place booking

document.getElementById("year").textContent = new Date().getFullYear(); // Footer year set

// ------------------ INITIAL RENDER ------------------
renderGrid();  // First time grid load
updateCart();  // First time cart refresh
