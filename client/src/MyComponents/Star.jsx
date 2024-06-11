import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const Star = ({ stars }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar style={{ color: "#FFA700" }} size={20} />
                ) : stars >= number ? (
                    <FaStarHalfAlt style={{ color: "#FFA700" }} size={20} />
                ) : (
                    <FaRegStar style={{ color: "#FFA700" }} size={20} />
                )}
            </span>
        );
    });

    return (
        <>
            {ratingStar}
        </>
    );
};
