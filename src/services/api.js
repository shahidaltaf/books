export const postBooks = async ({
    page,
    itemsPerPage = 20,
    filters = []
}) => {
    const response = await fetch('http://nyx.vima.ekt.gr:3000/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ page, itemsPerPage, filters })
    }).then(res => res.json());

    return response;
}