import { createClient } from "./server";

class getDataService {
  constructor() {
    this.table = "certificate_resource";
  }

  async getAllData() {
    const { data, error } = await createClient()
      .from(this.table)
      .select("*")
      .order("created_at", { ascending: true });
    this.data = data;
    return data;
  }

  async getFeaturedData() {
    const { data, error } = await createClient()
      .from(this.table)
      .select("*")
      .order("created_at", { ascending: true });
    const featuredData = data.filter((item) => item.featured === true);
    return featuredData;
  }

  async getSearchedData(query) {
    const { data, error } = await createClient()
      .from(this.table)
      .select("*")
      .order("created_at", { ascending: true });
    const searchedData = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    return searchedData;
  }
}

export default getDataService;
