export default function PlaceImg({ place, index = 0, className = null }) {
    if (!place.photos?.length) {
        return ''
    };
    return (
        <img className={className} src={'http://localhost:4000/uploads/' + place.photos[0]} />

    );
};