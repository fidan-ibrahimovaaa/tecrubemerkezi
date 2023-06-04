import React from "react";

export default function Filter({ cat, filteringName }) {
  return (
    <div>
      {/* filtering by name */}
      <div className="select_filter">
        <select value={cat} onChange={filteringName}>
          <option>Proqram adı</option>
          <option value="Maliyyə">Maliyyə</option>
          <option value="Satış">Satış</option>
          <option value="Təhsil və elm">Təhsil və elm</option>
          <option value="Marketinq">Marketinq</option>
          <option value="Tibb">Tibb</option>
          <option>Sənaye və istehsalat</option>
          <option value="İnformasiya Texnologiyaları">İnformasiya Texnologiyaları</option>
          <option value="Dizayn">Dizayn</option>
          <option value="İnzibati">İnzibati</option>
          <option value="Hüquq">Hüquq</option>
          <option value="Psixologiya">Psixologiya</option>
          <option >İnşaat</option>
          <option >Turizm</option>
          <option value="HR">HR</option>
          <option value="Televiziya və mətbuat">Televiziya və mətbuat</option>
          <option value="Tərcümə">Tərcümə</option>
          <option >Mühəndislik</option>
        </select>
      </div>

      
    </div>
  );
}
