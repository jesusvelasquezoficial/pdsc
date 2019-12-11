defmodule PdscServerWeb.DtdControllerTest do
  use PdscServerWeb.ConnCase

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Dtd

  @create_attrs %{
    dolar: "some dolar",
    euro: "some euro",
    fecha: "some fecha"
  }
  @update_attrs %{
    dolar: "some updated dolar",
    euro: "some updated euro",
    fecha: "some updated fecha"
  }
  @invalid_attrs %{dolar: nil, euro: nil, fecha: nil}

  def fixture(:dtd) do
    {:ok, dtd} = Tasas.create_dtd(@create_attrs)
    dtd
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all dtd", %{conn: conn} do
      conn = get(conn, Routes.dtd_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create dtd" do
    test "renders dtd when data is valid", %{conn: conn} do
      conn = post(conn, Routes.dtd_path(conn, :create), dtd: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.dtd_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some dolar",
               "euro" => "some euro",
               "fecha" => "some fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.dtd_path(conn, :create), dtd: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update dtd" do
    setup [:create_dtd]

    test "renders dtd when data is valid", %{conn: conn, dtd: %Dtd{id: id} = dtd} do
      conn = put(conn, Routes.dtd_path(conn, :update, dtd), dtd: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.dtd_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some updated dolar",
               "euro" => "some updated euro",
               "fecha" => "some updated fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, dtd: dtd} do
      conn = put(conn, Routes.dtd_path(conn, :update, dtd), dtd: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete dtd" do
    setup [:create_dtd]

    test "deletes chosen dtd", %{conn: conn, dtd: dtd} do
      conn = delete(conn, Routes.dtd_path(conn, :delete, dtd))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.dtd_path(conn, :show, dtd))
      end
    end
  end

  defp create_dtd(_) do
    dtd = fixture(:dtd)
    {:ok, dtd: dtd}
  end
end
