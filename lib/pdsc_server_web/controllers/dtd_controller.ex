defmodule PdscServerWeb.DtdController do
  use PdscServerWeb, :controller

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Dtd

  action_fallback PdscServerWeb.FallbackController

  def index(conn, _params) do
    dtd = Tasas.list_dtd()
    render(conn, "index.json", dtd: dtd)
  end

  def indexDescId(conn, _params) do
    dtd = Tasas.list_dtd_desc_id()
    render(conn, "index.json", dtd: dtd)
  end

  def create(conn, %{"dtd" => dtd_params}) do
    with {:ok, %Dtd{} = dtd} <- Tasas.create_dtd(dtd_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.dtd_path(conn, :show, dtd))
      |> render("show.json", dtd: dtd)
    end
  end

  def show(conn, %{"id" => id}) do
    dtd = Tasas.get_dtd!(id)
    render(conn, "show.json", dtd: dtd)
  end

  def update(conn, %{"id" => id, "dtd" => dtd_params}) do
    dtd = Tasas.get_dtd!(id)

    with {:ok, %Dtd{} = dtd} <- Tasas.update_dtd(dtd, dtd_params) do
      render(conn, "show.json", dtd: dtd)
    end
  end

  def delete(conn, %{"id" => id}) do
    dtd = Tasas.get_dtd!(id)

    with {:ok, %Dtd{}} <- Tasas.delete_dtd(dtd) do
      send_resp(conn, :no_content, "")
    end
  end
end
