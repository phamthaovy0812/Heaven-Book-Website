import React from 'react';
import listBookCensor from '../ranking/book.json';
import ItemBook from './itemBook';
const ListBook = ({status}) => {
    return (
        <div><div className="flex justify-around items-center flex-wrap">
            {  

                listBookCensor && listBookCensor.map((itemBook, index)=>{
                    if(status == itemBook.status) 
                        return(
                            <div > 
                                <ItemBook valueBook = {itemBook}/>
                            </div>
                        )
                })
            } </div>
        </div>
    );
};

export default ListBook;