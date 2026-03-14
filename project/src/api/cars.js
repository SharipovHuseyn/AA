export async function getCars(params = {}) {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(`http://localhost:3000/api/cars?${query}`);
  if (!res.ok) throw new Error("Ошибка загрузки авто");
  
  return res.json();
}

export async function getCarById(id) {
  const res = await fetch(`http://localhost:3000/api/cars/${id}`);
  if (!res.ok) throw new Error("Ошибка загрузки авто");
  return res.json();
}

export async function getConfig() {
  return prisma.parser_config.findFirst()
}
