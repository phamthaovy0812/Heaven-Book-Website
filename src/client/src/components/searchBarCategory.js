/* eslint-disable react/style-prop-object */
import React from "react";

const searchBarCategory = () => {
  return (
    <div>
<div class="  flex justify-center items-center">
	<div class="container mx-auto   rounded-lg p-14">
		<form class="border-2 border-primary rounded-lg">
			
				<div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Nhập tên sách cần tìm kiếm" />
					<div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						<select id="Com" class="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg ">
                            <option value="com" selected>Tiểu thuyết</option>
                            <option value="net">Truyện tranh</option>
                            <option value="org">chinh thám</option>
                        </select>
						<button class="bg-primary text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
					</div>
				</div>
		</form>
	</div>
</div>
    </div>
  );
};

export default searchBarCategory;
