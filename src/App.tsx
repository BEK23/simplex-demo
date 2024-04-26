import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const [data, setData] = useState("");
  const [selectedID, setSelectedID] = useState<string | null>(null);

  useEffect(() => {
    if (ref.current?.innerHTML !== data) {
      ref.current!.innerHTML = "Invalid HTML!";
    }

    const td = document.querySelectorAll("td");

    td.forEach((item) => {
      if (!item.innerText.trim()) return;

      const trigger = document.createElement("div");
      item.style.position = "relative";

      trigger.className = "trigger";
      trigger.textContent = "+";

      item.appendChild(trigger);
      item.addEventListener("click", () => {
        setSelectedID(item.getAttribute("data-suggestable_section_id"));
      });
    });
  }, [data]);

  return (
    <>
      <textarea
        defaultValue={`<table style="border-collapse: collapse; width: 100.034%; height: 89.5832px;" border="1"><colgroup><col style="width: 19.9383%;"><col style="width: 19.9383%;"><col style="width: 19.9383%;"><col style="width: 19.9383%;"><col style="width: 19.9383%;"></colgroup>\n<tbody>\n<tr style="height: 22.3958px;">\n<td style="height: 22.3958px;" data-suggestable_section_id="xu8J85G4">asd</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="NZzxjtHu">asd</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="s408FwZ6">asd</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="K8v0xrLO">ads</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="YLxEyt74">asd</td>\n</tr>\n<tr style="height: 22.3958px;">\n<td style="height: 22.3958px;" data-suggestable_section_id="BVROEqtg">&nbsp;</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="j9PqmBIC">asd</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="IZmIwWc0">asd</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="ElDKB1nl">asd</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="7s2HByyg">&nbsp;</td>\n</tr>\n<tr style="height: 22.3958px;">\n<td style="height: 22.3958px;" data-suggestable_section_id="hBnjOLKf">&nbsp;</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="tF9jF26Z">&nbsp;</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="e60NOipw">&nbsp;</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="Z5C105Yx">&nbsp;</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="1xOiobJ7">&nbsp;</td>\n</tr>\n<tr style="height: 22.3958px;">\n<td style="height: 22.3958px;" data-suggestable_section_id="i30eBiPG">&nbsp;</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="nPDUB5nU">&nbsp;</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="gln70vPE">&nbsp;</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="4Ki7o1OX">&nbsp;</td>\n<td style="height: 22.3958px;" data-suggestable_section_id="KKujF8Ix">&nbsp;</td>\n</tr>\n</tbody>\n</table>`}
        onBlur={(e) => setData(e.target.value)}
      />
      <div ref={ref} dangerouslySetInnerHTML={{ __html: data }} />

      {selectedID && (
        <>
          <div className="overlay" />
          <div className="modal">
            SelectedID: {selectedID}
            <button className="close" onClick={() => setSelectedID(null)}>
              X
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
