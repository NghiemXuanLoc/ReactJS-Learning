import React, { useState } from 'react'
import { toast } from 'react-toastify';

function ManagerMusic() {

    const [playList, setPlayList] = useState([
        {
            id: 1,
            name: "Cơn mưa ngang qua"
        },
        {
            id: 2,
            name: 'Em của ngày hôm qua'
        },
        {
            id: 3,
            name: 'Vợ người ta'
        }
    ]);

    const [newNameMusic, setNewNameMusic] = useState('');

    const [statusEditMusic, setStatusEditMusic] = useState(-1);

    const [editMusic, setEditMusic] = useState(undefined);



    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    const handleAddToPlayList = () => {


        if (newNameMusic) {
            // kiem tra xem ten bai hat da ton tai hay chua

            let exited = playList.find((item) => item.name.toLowerCase() === newNameMusic.toLowerCase());

            if (exited) {
                toast.error("Bài hát đã tồn tại trong danh sách, hãy nhập tên bài hát khác!");
            } else {
                let newMusic = {
                    id: playList[playList.length - 1].id + 1,
                    name: newNameMusic
                }

                setPlayList([
                    ...playList,
                    newMusic
                ])

                setNewNameMusic('');
            }
        }else{
            toast.error("Không được để tên bài hát rỗng");
        }
    }

    const handleDeleteMusic = (idDelete, nameDelete) => {
        if (window.confirm(`Bạn có chắc chắn muốn xóa bài hát "${nameDelete}" không?`)) {
            setPlayList(playList.filter((item) => {
                return item.id != idDelete;
            }))
        }
    }

    const handleEditMusic = (idEdit) => {
        if (editMusic === '') {
            toast.error("Không được để tên bài hát trống");
        } else
            if (editMusic) {
                setPlayList(playList.map((item) => {
                    if (item.id !== idEdit) {
                        return item;
                    } else {
                        let newItem = {
                            ...item,
                            name: editMusic
                        }

                        return newItem;
                    }
                }))

            }

        if (editMusic !== '') {
            setEditMusic(undefined);

            setStatusEditMusic(-1);
        }

    }

    console.log(editMusic)


    return (
        <div className='container mt-3'>

            <h2 className='text-success'>Manager Music <i className="fa-solid fa-music"></i></h2>

            <form onSubmit={handleSubmitForm} className='d-flex'>
                <input value={newNameMusic} onInput={(e) => setNewNameMusic(e.target.value)} type='text' className='form-control w-50' required />
                <button onClick={handleAddToPlayList} className='btn btn btn-primary'>Add to Playlist</button>
            </form>

            <div className='mt-3 w-50'>
                <ul className='list-group'>
                    {
                        playList.map((item) => {
                            return (
                                <li key={item.id} className='list-group-item d-flex justify-content-between'>
                                    {
                                        statusEditMusic === item.id ? <input onInput={(e) => setEditMusic(e.target.value)} className='form-control' type='text' value={editMusic != undefined ? editMusic : item.name} /> : item.name
                                    }

                                    {
                                        statusEditMusic === item.id ? (
                                            <div>
                                                <i role='button' onClick={() => (handleEditMusic(item.id))} className="fa-solid fa-check text-warning"></i>
                                                <i role='button' onClick={() => {
                                                    setStatusEditMusic(-1);
                                                    setEditMusic(undefined);
                                                }} className="fa-solid fa-xmark text-danger"></i>
                                            </div>
                                        ) : (
                                            <div>
                                                <i role='button' onClick={() => setStatusEditMusic(item.id)} className="fa-solid fa-pen-to-square text-warning"></i>
                                                <i role='button' onClick={() => handleDeleteMusic(item.id, item.name)} className="fa-solid fa-trash text-danger"></i>
                                            </div>
                                        )
                                    }
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}


export default ManagerMusic;