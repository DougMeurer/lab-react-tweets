function User ({userName}) {

    return (
        <>
            <span className="user">
          <span className="name">{userName.name}</span>
            <span className="handle">@{userName.handle}</span>
          </span>
        </>
    )
}

export default User 