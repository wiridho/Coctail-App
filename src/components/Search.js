import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import './styling/SearchBar.css'

function Search({ handleSearchChange }) {

    return (
        <>
            <div className="searchContainer">
                <div>
                    <h1>All meals</h1>
                    <Input
                        className="input"
                        placeholder="Search Meals"
                        prefix={<SearchOutlined />}
                        onChange={handleSearchChange}
                    />
                </div>
                <div>


                </div>
            </div>
        </>
    );
}

export default Search;