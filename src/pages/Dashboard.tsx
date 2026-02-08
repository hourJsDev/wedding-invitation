import React, { useEffect, useState, ChangeEvent } from "react";
import { base64Encode } from "../utils/helper";
import { CheckCircle, Copy } from "lucide-react";

// Define the shape of a Guest object
interface Guest {
  name: string;
  uuid: string;
}

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<Guest[]>([]);

  const handleSelect = (uuid: string, name: string): void => {
    setSelected(uuid);
    setTimeout(() => {
      setSelected("");
    }, 1500);

    const text = `សូមគោរពអញ្ជើញ ${name}
យើងខ្ញ៉ំមានកិត្តយស សូមគោរពអញ្ជើញ ឯកឧត្តម លោកឧកញ្ញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្ត អញ្ញើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្ដី ជ័យមង្គលក្នុងពីធីរៀបអាពាហ៍ពិពាហ៍ ដែលនឹងប្រារព្ធឡើង នៅថ្ងៃទី ២៨ ខែកុម្ភៈ និង ថ្ងៃទី ០១ ខែមីនា ឆ្នាំ ២០២៦។ សូមគោរពអរគុណចំពោះការមានវត្តមានដ៏ឧដ្គុងឧត្តមក្នុងថ្ងៃពិសេសនៃយើងខ្ញ៉ំទាំងពីរ។

👉🏼សូមចូលទៅកាន់ Link ខាងក្រោមដើម្បីបើកលិខិតអញ្ជើញ ( Digital Wedding Invitation)៖ 

[${window.location.origin + "/?uuid=" + uuid}]
`;
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    const storedList = localStorage.getItem("list");
    const cacheList: Guest[] = storedList ? JSON.parse(storedList) : [];

    // Assuming 'data' from "../data" is also an array of Guest objects
    setList(cacheList);
  }, []);

  const handleAddNew = (): void => {
    const storedList = localStorage.getItem("list");
    const cacheList: Guest[] = storedList ? JSON.parse(storedList) : [];

    const guest: Guest = { name: search, uuid: base64Encode(search) };

    localStorage.setItem("list", JSON.stringify([guest, ...cacheList]));
    setList([guest, ...list]);
    setSearch("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <div className="h-[100dvh] bg-[white] overflow-auto">
      <div className="w-[95%] bg-white sticky top-[0px] mx-auto py-[10px]">
        <input
          value={search}
          placeholder="Enter guest name"
          onChange={handleInputChange}
          className="w-full font-fam-normal valid:border-black focus:border-black rounded-md px-[10px] border h-[50px] outline-none"
          type="text"
          required
        />
      </div>
      <div className="flex justify-end mx-[10px]">
        <button
          onClick={handleAddNew}
          disabled={!search}
          className="bg-[#06002a] rounded-sm font-fam-normal text-white px-[10px] py-[7px] disabled:opacity-50"
        >
          Create New
        </button>
      </div>
      <ul className="flex w-[95%] mt-[30px] mx-auto flex-col gap-[10px]">
        {(search
          ? list.filter((d) =>
              d.name.toLowerCase().includes(search.toLowerCase()),
            )
          : list
        ).map((d, index) => (
          <li
            key={`${d.uuid}-${index}`}
            className="flex hover:bg-slate-50  shadow-sm py-[10px] px-[10px] justify-between items-center"
          >
            <span className="font-fam-normal">{d.name}</span>
            <span
              onClick={() => handleSelect(d.uuid, d.name)}
              className="text-[18px] cursor-pointer"
            >
              {selected === d.uuid ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <Copy />
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
