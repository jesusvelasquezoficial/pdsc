defmodule PdscServerWeb.BcvController do
  use PdscServerWeb, :controller

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Bcv

  action_fallback PdscServerWeb.FallbackController

  def index(conn, _params) do
    bcv = Tasas.list_bcv()
    render(conn, "index.json", bcv: bcv)
  end

  def indexDescId(conn, _params) do
    bcv = Tasas.list_bcv_desc_id()
    render(conn, "index.json", bcv: bcv)
  end

  def lastTasasBcv(conn, _params) do
    bcv = Tasas.lastTasasBcv()
    render(conn, "show.json", bcv: bcv)
  end

  def create(conn, %{"bcv" => bcv_params}) do
    with {:ok, %Bcv{} = bcv} <- Tasas.create_bcv(bcv_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.bcv_path(conn, :show, bcv))
      |> render("show.json", bcv: bcv)
    end
  end

  def show(conn, %{"id" => id}) do
    bcv = Tasas.get_bcv!(id)
    render(conn, "show.json", bcv: bcv)
  end

  def update(conn, %{"id" => id, "bcv" => bcv_params}) do
    bcv = Tasas.get_bcv!(id)

    with {:ok, %Bcv{} = bcv} <- Tasas.update_bcv(bcv, bcv_params) do
      render(conn, "show.json", bcv: bcv)
    end
  end

  def delete(conn, %{"id" => id}) do
    bcv = Tasas.get_bcv!(id)

    with {:ok, %Bcv{}} <- Tasas.delete_bcv(bcv) do
      send_resp(conn, :no_content, "")
    end
  end
end
