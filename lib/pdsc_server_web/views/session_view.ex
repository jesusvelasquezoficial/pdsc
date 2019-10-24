defmodule PdscServerWeb.SessionView do
    use PdscServerWeb, :view
    alias PdscServerWeb.UserView
  
    def render("index.json", %{users: users}) do
      %{data: render_many(users, UserView, "user.json")}
    end
  
    def render("show.json", %{user: user}) do
      %{data: render_one(user, UserView, "user.json")}
    end
  
    def render("user.json", %{user: user}) do
      %{id: user.id, username: user.name, email: user.email, token: Phoenix.Token.sign(PdscServerWeb.Endpoint,"key", user.id)}
    end
  end
  