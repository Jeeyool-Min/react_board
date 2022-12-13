import React from "react";
import { Link } from "react-router-dom";

function Post({ id, name }) {
  return (
    <>
        <td> <Link to={`/detail/${id}`}> {id} </Link> </td>
        <td> {name} </td>
    </>
  );
}

export default Post;