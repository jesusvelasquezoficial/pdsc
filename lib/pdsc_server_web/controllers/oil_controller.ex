defmodule PdscServerWeb.OilController do
  use PdscServerWeb, :controller

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Oil

  action_fallback PdscServerWeb.FallbackController

  def index(conn, _params) do
    oil = Tasas.list_oil()
    render(conn, "index.json", oil: oil)
  end

  def create(conn, %{"oil" => oil_params}) do
    with {:ok, %Oil{} = oil} <- Tasas.create_oil(oil_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.oil_path(conn, :show, oil))
      |> render("show.json", oil: oil)
    end
  end

  def show(conn, %{"id" => id}) do
    oil = Tasas.get_oil!(id)
    render(conn, "show.json", oil: oil)
  end

  def update(conn, %{"id" => id, "oil" => oil_params}) do
    oil = Tasas.get_oil!(id)

    with {:ok, %Oil{} = oil} <- Tasas.update_oil(oil, oil_params) do
      render(conn, "show.json", oil: oil)
    end
  end

  def delete(conn, %{"id" => id}) do
    oil = Tasas.get_oil!(id)

    with {:ok, %Oil{}} <- Tasas.delete_oil(oil) do
      send_resp(conn, :no_content, "")
    end
  end
end
