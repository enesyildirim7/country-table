import React, { useState, useEffect } from "react";
import _ from "lodash";
import Table from "react-bootstrap/Table";
import SearchField from "./SearchField";
import axiosInstance from "./axiosInstance";

const CountryTable = () => {
  const [searchType, setSearchType] = useState("");
  const [search, setSearch] = useState("");
  const [dataRows, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get()
      .then((res) => {
        let data = res.data.map((user) =>
          _.pick(user, ["name", "capital", "region", "flag"])
        );
        setData(data);
      })
      .catch(() => {
        alert("Could not fetch");
      });
  }, []);

  return (
    <>
      <SearchField search={search} setSearch={setSearch} setSearchType={setSearchType} />
      <div className="overflow-auto" style={{ height: "20rem" }}>
        <Table className="table table-bordered table-hover table-sm">
          <thead>
            <tr>
              <th className="col">Name</th>
              <th className="col">Capital</th>
              <th className="col">Region</th>
              <th className="col">Flag</th>
            </tr>
          </thead>
          <tbody>
            {searchType === "capital"
              ? dataRows
                  ?.filter((data) => data.capital?.toLowerCase().includes(search))
                  .map((country) => (
                    <tr>
                      <td>{country.name}</td>
                      <td>{country.capital}</td>
                      <td>{country.region}</td>
                      <td>
                        <img src={country.flag} alt={country.name + " flag"} width="48" />
                      </td>
                    </tr>
                  ))
              : dataRows
                  ?.filter(
                    (data) =>
                      data.name?.toLowerCase().includes(search) ||
                      data.capital?.toLowerCase().includes(search) ||
                      data.region?.toLowerCase().includes(search)
                  )
                  .map((country) => (
                    <tr>
                      <td>{country.name}</td>
                      <td>{country.capital}</td>
                      <td>{country.region}</td>
                      <td>
                        <img src={country.flag} alt={country.name + " flag"} width="48" />
                      </td>
                    </tr>
                  ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex mt-4 ">
        <div className="rounded border border-primary px-4">
          Total Country : {dataRows.length}
        </div>
      </div>
    </>
  );
};

export default CountryTable;
