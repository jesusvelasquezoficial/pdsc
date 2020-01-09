defmodule PdscServerWeb.DmController do
  use PdscServerWeb, :controller

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Dm

  action_fallback PdscServerWeb.FallbackController

  def index(conn, _params) do
    dm = Tasas.list_dm()
    render(conn, "index.json", dm: dm)
  end

  def indexDescId(conn, _params) do
    dm = Tasas.list_dm_desc_id()
    render(conn, "index.json", dm: dm)
  end
  
  def lastTasasDm(conn, _params) do
    dm = Tasas.lastTasasDm()
    render(conn, "show.json", dm: dm)
  end

  def create(conn, %{"dm" => dm_params}) do
    with {:ok, %Dm{} = dm} <- Tasas.create_dm(dm_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.dm_path(conn, :show, dm))
      |> render("show.json", dm: dm)
    end
  end

  def show(conn, %{"id" => id}) do
    dm = Tasas.get_dm!(id)
    render(conn, "show.json", dm: dm)
  end

  def update(conn, %{"id" => id, "dm" => dm_params}) do
    dm = Tasas.get_dm!(id)

    with {:ok, %Dm{} = dm} <- Tasas.update_dm(dm, dm_params) do
      render(conn, "show.json", dm: dm)
    end
  end

  def delete(conn, %{"id" => id}) do
    dm = Tasas.get_dm!(id)

    with {:ok, %Dm{}} <- Tasas.delete_dm(dm) do
      send_resp(conn, :no_content, "")
    end
  end
end
