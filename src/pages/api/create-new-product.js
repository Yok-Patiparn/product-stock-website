import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sohnghitinghpxytqtjf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvaG5naGl0aW5naHB4eXRxdGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc1MTYzMDgsImV4cCI6MjAwMzA5MjMwOH0.GMUSjHC20jLb-g1fW4O4rIBDrPwf8VbYFG-x6SQXkKs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  const { method } = req;

  try {
    const { product_name, amount, description, image } = req.body;
    console.log(req.body);

    const { data, error } = await supabase
      .from("products")
      .insert([{ product_name }, { amount }, { description }]);

    return res.json({ message: "Succesfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
}
