
const token = "y0_AgAAAAATrPSlAAqJ_AAAAADtVenLDojAyIyhQM6iWIGM3adrhUs5d0w";
// получение списка файлов по указаному адресу
export const requestDisk = async (link:string) => {
    try {
        const res = await fetch(`https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https://disk.yandex.ru/d/${link}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `OAuth ${token}`,
            },
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};