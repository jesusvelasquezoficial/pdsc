defmodule PdscServerWeb.DmControllerTest do
  use PdscServerWeb.ConnCase

  alias PdscServer.Tasas
  alias PdscServer.Tasas.Dm

  @create_attrs %{
    dolar: "some dolar",
    fecha: "some fecha"
  }
  @update_attrs %{
    dolar: "some updated dolar",
    fecha: "some updated fecha"
  }
  @invalid_attrs %{dolar: nil, fecha: nil}

  def fixture(:dm) do
    {:ok, dm} = Tasas.create_dm(@create_attrs)
    dm
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all dm", %{conn: conn} do
      conn = get(conn, Routes.dm_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create dm" do
    test "renders dm when data is valid", %{conn: conn} do
      conn = post(conn, Routes.dm_path(conn, :create), dm: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.dm_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some dolar",
               "fecha" => "some fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.dm_path(conn, :create), dm: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update dm" do
    setup [:create_dm]

    test "renders dm when data is valid", %{conn: conn, dm: %Dm{id: id} = dm} do
      conn = put(conn, Routes.dm_path(conn, :update, dm), dm: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.dm_path(conn, :show, id))

      assert %{
               "id" => id,
               "dolar" => "some updated dolar",
               "fecha" => "some updated fecha"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, dm: dm} do
      conn = put(conn, Routes.dm_path(conn, :update, dm), dm: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete dm" do
    setup [:create_dm]

    test "deletes chosen dm", %{conn: conn, dm: dm} do
      conn = delete(conn, Routes.dm_path(conn, :delete, dm))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.dm_path(conn, :show, dm))
      end
    end
  end

  defp create_dm(_) do
    dm = fixture(:dm)
    {:ok, dm: dm}
  end
end
