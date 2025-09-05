import data from "@/datas/updates.json";
import UpdateCard from "@/components/UpdateCard";

export default function Updates() {
  const items = [...data].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">更新日誌</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((it) => <UpdateCard key={it.id} item={it} />)}
      </div>
    </main>
  );
}
